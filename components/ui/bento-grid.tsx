import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-min max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-[2.5rem] group/bento transition duration-500 glass hover:bg-white/[0.08] hover:border-accent/30 p-8 justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="w-full flex-grow">
                {header}
            </div>
            <div className="group-hover/bento:translate-y-[-5px] transition duration-300">
                {icon}
                <div className="font-sans font-bold text-white mb-3 mt-6 text-2xl tracking-tight">
                    {title}
                </div>
                <div className="font-sans font-medium text-neutral-400 text-base leading-relaxed text-pretty">
                    {description}
                </div>
            </div>
        </div>
    );
};

