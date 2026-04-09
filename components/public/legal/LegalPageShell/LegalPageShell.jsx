"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FooterHome from "@components/public/FooterHome";
import NavLogo from "@public/assets/icons/logo-navbar.webp";
import { Menu, X } from "lucide-react";
import styles from "./LegalPageShell.module.scss";

export default function LegalPageShell({
    title,
    intro,
    sections = [],
    lastUpdated = "14 de marzo de 2026",
}) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isIndexFixed, setIsIndexFixed] = useState(false);

    const [sidebarMetrics, setSidebarMetrics] = useState({
        left: 0,
        width: 0,
        height: 0,
    });

    const [mobileBarHeight, setMobileBarHeight] = useState(0);
    

    const headerRef = useRef(null);
    const sidebarWrapperRef = useRef(null);
    const sidebarCardRef = useRef(null);
    const mobileIndexBarRef = useRef(null);

    const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

    useEffect(() => {
        const observers = [];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: "-30% 0px -55% 0px",
                    threshold: 0.1,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [sectionIds]);

    useEffect(() => {
        if (!headerRef.current) return;

        const isMobile = window.innerWidth <= 768;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIndexFixed(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: isMobile
                    ? "10px 0px 0px 0px"   // mobile
                    : "42px 0px 0px 0px",  // desktop
            }
        );

        observer.observe(headerRef.current);

        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        const updateMeasurements = () => {
            if (sidebarWrapperRef.current && sidebarCardRef.current) {
                const wrapperRect = sidebarWrapperRef.current.getBoundingClientRect();
                const cardRect = sidebarCardRef.current.getBoundingClientRect();

                setSidebarMetrics({
                    left: wrapperRect.left,
                    width: wrapperRect.width,
                    height: cardRect.height,
                });
            }

            if (mobileIndexBarRef.current) {
                const mobileRect = mobileIndexBarRef.current.getBoundingClientRect();
                setMobileBarHeight(mobileRect.height);
            }
        };

        updateMeasurements();

        const resizeObserver = new ResizeObserver(() => {
            updateMeasurements();
        });

        if (sidebarWrapperRef.current) resizeObserver.observe(sidebarWrapperRef.current);
        if (sidebarCardRef.current) resizeObserver.observe(sidebarCardRef.current);
        if (mobileIndexBarRef.current) resizeObserver.observe(mobileIndexBarRef.current);

        window.addEventListener("resize", updateMeasurements);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateMeasurements);
        };
    }, [sections.length, isIndexFixed]);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMobileMenuOpen]);

    const handleSectionClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <main className={styles.page}>
                <div className={styles.heroGlow} />
                <div className={styles.gridOverlay} />

                <div className={`${styles.container} container`}>
                    <header ref={headerRef} className={styles.header}>
                        <div className={styles.headerLeft}>
                            <Link href="/" className={styles.returnLink}>
                                <Image src={NavLogo} width={44} height={44} alt="Logo" />
                                <span>Regresar al inicio</span>
                            </Link>
                        </div>

                        <div className={styles.headerCenter}>
                            <div className={styles.heroBadge}>Información legal</div>
                            <h1 className={styles.title}>{title}</h1>
                            <p className={styles.intro}>{intro}</p>
                        </div>

                        <div className={styles.headerRight}>
                            <span className={styles.updated}>Última actualización: {lastUpdated}</span>
                        </div>
                    </header>

                    <div
                        className={`${styles.mobileIndexBarSlot} ${isIndexFixed ? styles.mobileIndexBarSlotActive : ""
                            }`}
                        style={
                            isIndexFixed && mobileBarHeight
                                ? { height: `${mobileBarHeight}px` }
                                : undefined
                        }
                    >
                        <div
                            ref={mobileIndexBarRef}
                            className={`${styles.mobileIndexBar} ${isIndexFixed ? styles.mobileIndexBarFixed : ""
                                }`}
                        >
                            <button
                                type="button"
                                className={styles.mobileIndexButton}
                                onClick={() => setIsMobileMenuOpen(true)}
                            >
                                <Menu size={18} strokeWidth={1.75} />
                                <span>Índice</span>
                            </button>

                            <span className={styles.mobileActiveLabel}>
                                {sections.find((section) => section.id === activeSection)?.label || title}
                            </span>
                        </div>
                    </div>

                    <div className={styles.layout}>
                        <aside ref={sidebarWrapperRef} className={styles.sidebar}>
                            <div
                                className={`${styles.sidebarPlaceholder} ${isIndexFixed ? styles.sidebarPlaceholderActive : ""
                                    }`}
                                style={
                                    isIndexFixed && sidebarMetrics.height
                                        ? { height: `${sidebarMetrics.height}px` }
                                        : undefined
                                }
                            />

                            <div
                                ref={sidebarCardRef}
                                className={`${styles.sidebarCard} ${isIndexFixed ? styles.sidebarCardFixed : ""
                                    }`}
                                style={
                                    isIndexFixed
                                        ? {
                                            left: `${sidebarMetrics.left}px`,
                                            width: `${sidebarMetrics.width}px`,
                                        }
                                        : undefined
                                }
                            >
                                <p className={styles.sidebarLabel}>Índice</p>

                                <nav className={styles.nav}>
                                    {sections.map((section, index) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className={`${styles.navItem} ${activeSection === section.id ? styles.navItemActive : ""
                                                }`}
                                        >
                                            <span className={styles.navNumber}>
                                                {(index + 1).toString().padStart(2, "0")}
                                            </span>
                                            <span>{section.label}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        <section className={styles.content}>
                            <div className={styles.sections}>
                                {sections.map((section) => (
                                    <article
                                        key={section.id}
                                        id={section.id}
                                        className={styles.sectionCard}
                                    >
                                        <div className={styles.sectionHeader}>
                                            <span className={styles.sectionAnchor}>#{section.id}</span>
                                            <h2 className={styles.sectionTitle}>{section.label}</h2>
                                        </div>

                                        {section.description && (
                                            <p className={styles.sectionDescription}>
                                                {section.description}
                                            </p>
                                        )}

                                        {section.paragraphs?.map((paragraph, index) => (
                                            <p key={index} className={styles.paragraph}>
                                                {paragraph}
                                            </p>
                                        ))}

                                        {section.items?.length > 0 && (
                                            <ul className={styles.list}>
                                                {section.items.map((item, index) => (
                                                    <li key={index} className={styles.listItem}>
                                                        <span className={styles.listDot} />
                                                        <div>
                                                            {item.title && (
                                                                <strong className={styles.listItemTitle}>
                                                                    {item.title}{" "}
                                                                </strong>
                                                            )}
                                                            <span>{item.text}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className={styles.mobileMenuOverlay}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div
                            className={styles.mobileMenu}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className={styles.mobileMenuHeader}>
                                <div>
                                    <p className={styles.mobileMenuEyebrow}>Índice</p>
                                    <h3 className={styles.mobileMenuTitle}>{title}</h3>
                                </div>

                                <button
                                    type="button"
                                    className={styles.mobileMenuClose}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Cerrar índice"
                                >
                                    <X size={18} strokeWidth={1.75} />
                                </button>
                            </div>

                            <nav className={styles.mobileNav}>
                                {sections.map((section, index) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`${styles.mobileNavItem} ${activeSection === section.id ? styles.mobileNavItemActive : ""
                                            }`}
                                        onClick={handleSectionClick}
                                    >
                                        <span className={styles.mobileNavNumber}>
                                            {(index + 1).toString().padStart(2, "0")}
                                        </span>
                                        <span>{section.label}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </main>

            <FooterHome />
        </>
    );
}
