import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle?: string
    alignment?: "left" | "center"
}

export function SectionHeader({
    title,
    subtitle,
    alignment = "center",
    className,
    ...props
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-4 mb-12 sm:mb-16",
                alignment === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
            {...props}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-[700px] text-lg text-muted-foreground leading-relaxed"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}
