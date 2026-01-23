import { resumeData } from "@/app/data/resume";
import Image from "next/image";

export function MoreSection() {
    const allGalleryImages = resumeData.projects.flatMap((project) =>
        project.gallery ? project.gallery.map(img => ({ src: img, title: project.title })) : []
    );

    if (allGalleryImages.length === 0) return null;

    return (
        <section id="more" className="py-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full inline-block" />
                More Projects Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allGalleryImages.map((item, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 aspect-video hover:shadow-2xl transition-all duration-300">
                        <Image
                            src={item.src}
                            alt={`${item.title} screenshot`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm border border-white/10">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
