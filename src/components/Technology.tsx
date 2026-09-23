import { useEffect, useState } from "react";

interface Technology {
    id: number;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

export default function Technology() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [stack, setStack] = useState<Technology[]>([]);
    const [toast, setToast] = useState("");

    useEffect(() => {
        fetch("/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                return response.json();
            })
            .then((data: Technology[]) => {
                setTechnologies(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        if (toast === "") {
            return;
        }

        const timer = window.setTimeout(() => {
            setToast("");
        }, 3000);

        return () => {
            window.clearTimeout(timer);
        };
    }, [toast]);

    const addToStack = (technology: Technology) => {
        const alreadyExists = stack.find(
            (item) => item.id === technology.id
        );

        if (alreadyExists) {
            setToast(`${technology.name} is already in your stack.`);
            return;
        }

        const newStack = [...stack, technology];

        setStack(newStack);
        setToast(`${technology.name} added to your stack.`);
    };

    const removeFromStack = (id: number) => {
        const technology = stack.find(
            (item) => item.id === id
        );

        const newStack = stack.filter(
            (item) => item.id !== id
        );

        setStack(newStack);

        if (technology) {
            setToast(`${technology.name} removed from your stack.`);
        }
    };

    const clearStack = () => {
        setStack([]);
        setToast("Your stack has been cleared.");
    };

    return (
        <>
            {toast !== "" && (
                <div className="fixed right-6 top-6 z-[9999] w-[320px] rounded-xl border border-gray-200 bg-white p-4 shadow-2xl">
                    <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                            ✓
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-900">
                                Success
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                                {toast}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setToast("")}
                            className="text-lg leading-none text-gray-400 transition hover:text-gray-900"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            <section className="bg-white px-5 py-16 md:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-10">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Explore the{" "}
                            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                                Technologies
                            </span>
                        </h2>

                        <p className="mt-3 text-sm text-gray-500 md:text-base">
                            Pick one technology per category to build your ideal stack.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {technologies.map((technology) => {
                                const isAdded = stack.some(
                                    (item) => item.id === technology.id
                                );

                                return (
                                    <article
                                        key={technology.id}
                                        className="flex min-h-[310px] flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
                                                <img
                                                    src={technology.icon}
                                                    alt={technology.name}
                                                    className="h-6 w-6 object-contain"
                                                />
                                            </div>

                                            <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
                                                {technology.badge}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                                            {technology.category}
                                        </p>

                                        <h3 className="mt-1 text-xl font-bold text-gray-900">
                                            {technology.name}
                                        </h3>

                                        <p className="mt-2 min-h-[58px] text-sm leading-6 text-gray-500">
                                            {technology.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-gray-400">
                                                    Level
                                                </span>

                                                <span className="text-xs font-semibold text-gray-700">
                                                    {technology.difficulty}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <span className="text-xs font-semibold text-gray-700">
                                                    {technology.rating}
                                                </span>

                                                <span className="text-sm text-yellow-400">
                                                    ★
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => addToStack(technology)}
                                            disabled={isAdded}
                                            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition ${isAdded
                                                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                                                : "bg-gray-950 text-white hover:bg-pink-500"
                                                }`}
                                        >
                                            {isAdded ? (
                                                <>
                                                    <span>✓</span>
                                                    Added to Stack
                                                </>
                                            ) : (
                                                <>
                                                    <span>+</span>
                                                    Add to Stack
                                                </>
                                            )}
                                        </button>
                                    </article>
                                );
                            })}
                        </div>

                        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">

                            <p className="text-sm text-gray-400">
                                No technologies selected yet.
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-gray-900">
                                Your Stack
                            </h3>

                            {stack.length === 0 ? (
                                <div className="mt-6 rounded-lg border border-dashed border-gray-200 px-5 py-10 text-center">
                                    <p className="text-sm text-gray-500">
                                        Your stack is empty.
                                    </p>
                                </div>
                            ) : (
                                <div className="mt-6">
                                    <div className="space-y-3">
                                        {stack.map((technology) => (
                                            <div
                                                key={technology.id}
                                                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                                                        <img
                                                            src={technology.icon}
                                                            alt={technology.name}
                                                            className="h-5 w-5 object-contain"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900">
                                                            {technology.name}
                                                        </p>

                                                        <p className="text-xs text-gray-400">
                                                            {technology.category}
                                                        </p>
                                                    </div>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeFromStack(technology.id)
                                                    }
                                                    className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={clearStack}
                                        className="mt-5 w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                                    >
                                        Clear Stack
                                    </button>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}