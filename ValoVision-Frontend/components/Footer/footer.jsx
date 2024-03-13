import './styles.css';

const Footer = () => {
    
    return (
        <footer className="footer">
             <p>
                This project is not affiliated with, endorsed, sponsored, or specifically approved by Riot Games.
                Valorant and any associated logos are trademarks, service marks, or registered trademarks of Riot Games, Inc.
            </p>

            <p>
                Assets and information used in this project are for educational and demonstration purposes only.
            </p>

            <p>
                © {new Date().getFullYear()} Valorant Strategy Planner. All rights reserved.
            </p>

        </footer>

    );
};


export default Footer;