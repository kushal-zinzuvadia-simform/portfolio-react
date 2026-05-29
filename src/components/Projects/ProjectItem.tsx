type ProjectItemProps = {
    info: infoType
}

type infoType = {
    title: string;
    description: string;
    imgUrl: string;
    github: string;
    preview: string;
}

export const ProjectItem = ({ info }: ProjectItemProps) => {
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
            "
        >
            <div className="overflow-hidden">
                <img
                    src={info.imgUrl}
                    alt={info.title}
                    className="
                        h-56
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />
            </div>

            <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-left">
                        {info.title}
                    </h3>

                    <p className="text-zinc-400 text-left leading-relaxed text-sm sm:text-base">
                        {info.description}
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <a
                        href={info.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            px-5
                            py-2.5
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            text-sm
                            font-medium
                            transition-all
                            duration-300
                            hover:bg-white/10
                            hover:border-white/20
                        "
                    >
                        GitHub
                    </a>

                    <a
                        href={info.preview}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            px-5
                            py-2.5
                            rounded-full
                            bg-linear-to-r
                            from-violet-600
                            to-fuchsia-600
                            text-sm
                            font-semibold
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                    >
                        Live Preview
                    </a>
                </div>
            </div>
        </div>
    )
}
