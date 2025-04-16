import { Linkedin, Github } from "react-bootstrap-icons";
import "./header.css";

interface HeaderProps {
    scrollToIntro: () => void;
    scrollToAbout: () => void;
    scrollToProjects: () => void;
    scrollToContact: () => void;
};

export default function Header({ scrollToIntro, scrollToAbout, scrollToProjects, scrollToContact }: HeaderProps) {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo-title-container">
                    <p className="title-text">Anthony Catanzariti</p>
                </div>
                <div className="navigation-container">
                    <p onClick={scrollToIntro}>Intro</p>
                    <p onClick={scrollToAbout}>About</p>
                    <p onClick={scrollToProjects}>Projects</p>
                    <p onClick={scrollToContact}>Contact</p>
                    <div className="icon-container"><a href="https://www.linkedin.com/in/anthony-catanzariti" target="_blank"><Linkedin size={25} /></a></div>
                    <div className="icon-container"><a href="https://www.github.com/apcatanzariti" target="_blank"><Github size={25} /></a></div>
                </div>
            </div>
        </div>
    );
};