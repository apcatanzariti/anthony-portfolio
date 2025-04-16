import ImageCarousel from "../../ui/image-carousel/ImageCarousel";
import "./projects.css";

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-title">
                <p>Projects</p>
            </div>
            <div className="projects-divider"></div>
            <div className="projects-subtext">
                <p>Here you can find some information on professional and personal projects I have worked on.</p>
            </div>
            <div className="project-block">
                <div>
                    <p className="projects-content-title">Entergy Isolated Backup Application</p>
                    <p className="projects-content-text">The Isolated Backup Application for Entergy was a web applicaiton built to protect the company from incidents where its data could be compromised - such as hackers, ransomware, and even natural disasters. The application would back up all servers and safely store the data in an isolated enviroment, allowing the data to be recovered in the event of an attack or data loss due to physical damage from natural disasters. This created tremendous value for not only Entergy, but its customers as well. I designed and developed both the front and back ends (React/Node) of the application, integrating Ansible automation and CommVault where needed.</p>
                </div>
                <div>
                    <ImageCarousel 
                        sources={[
                            '../../../Entergy-1.png',
                            '../../../Entergy-2.png',
                            '../../../Entergy-3.png',
                            '../../../Entergy-4.png',
                            '../../../Entergy-5.png',
                            '../../../Entergy-6.png'
                        ]}
                        displayImage="/Entergy-1.png" 
                    />
                </div>
            </div>
            <div className="project-block">
                <div>
                    <p className="projects-content-title">SEC and HHS Enterprise Web Applications</p>
                    <p className="projects-content-text">These projects for both the SEC and HHS were designed to streamline the intake process of applicants, as well as manage applicant data and provide analytics. These functions were previously handled by an Excel-based system. By switching to the web based applications developed by myself and the team, these organizations saw less errors, the intake processing time was drastically reduced, and users could see metrics in real time. The applications were built using React, TypeScript, Next.js, Python, Prisma ORM, Terraform, and Azure App Service for deployment, and O365 Authentication.</p>
                </div>
                <div>
                    <ImageCarousel 
                        sources={[
                            '../../../HHS-1.png',
                            '../../../HHS-2.png',
                            '../../../HHS-3.png',
                            '../../../HHS-4.png'
                        ]}
                        displayImage="/HHS-1.png"
                    />
                </div>
            </div>
            <div className="project-block">
                <div>
                    <p className="projects-content-title">Festi</p>
                    <p className="projects-content-text">Festi was a social media platform I took over development on. Both the web based application as well as the mobile application were outdated and needed vast improvements. I began by updating the Expo SDK by several versions so that it was no longer outdated. I then fixed and improved numerous UI/UX elements that were either broken by the updated Expo version, or unfinished by the previous developer(s). I also improved backend logic and updated some endpoints to enhance performance. I mirrored the changes made to the mobile app on the web app as well. For these applications I utilized React, React Native, Expo, Django, Vue, and GitHub.</p>
                </div>
                <div>
                    <p className="projects-content-title">MediaVax</p>
                    <p className="projects-content-text">MediaVax is a disinformation detection company that I worked on as a full stack developer. My main role in developing this application was to enable topic switching within the application. When my team started work on the application, it could only scan and present information on a single topic. Using Javascript, React, Node, and AWS CodeCommit I developed custom functionality for dynamic topic switching - meaning a new topic could be chosen and relevant data would be fetched, along with displaying new data visualizations complete with appropriate filters, etc. This allowed MediaVax to quickly adapt to new and emerging current events.</p>
                </div>
            </div>
            <div className="project-block">
                <div>
                    <p className="projects-content-title">Boys & Girls Club of America</p>
                    <p className="projects-content-text">After finishing the Full Stack Development program at Bloom Institute of Technology, I was chosen to lead a team of students to work on a new we based application for the Boys & Girls club nonprofit organization. My team and I interfaced directly with Dr. Kanoe Naone who was the President/CEO at the time. The application&apos;s role was to facilitate the gathering of feedback from kids on activites and classes they would take part in during their time at the clubs. This data would inform the continuation and future implementation of different activities offered at the clubs. I wrote code for this project, primarily in React and Node with a Postgres database, but also mentored, coached, and supported the student developers on the team.</p>
                </div>
                <div>
                    <p className="projects-content-title">Portfolio</p>
                    <p className="projects-content-text">I want to include this portfolio in this list so I can go into a little bit of detail into how I created it. It is built using Javascript, React, TypeScript, Next.js, GitHub, with Vercel for deployment. I have worked on other projects that utilized Next.js, but this was the first project I have initialized utilizing it. I programmed the website to look great on large monitors, as well as laptop screens even as the browser window is made very small. The auto scrolling functionality through a button, or through the navigation is done using the HTML DOM element&apos;s `scrollIntoView()` method. No A.I. was used when creating the porfolio and I hope you have enjoyed browsing the site as much as I enjoyed making it!</p>
                </div>
            </div>
        </div>
    );
};