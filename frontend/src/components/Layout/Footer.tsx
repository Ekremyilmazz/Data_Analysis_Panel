const Footer: React.FC = () => {
    return (
        <footer className="bg-teal-500 text-white py-4 px-6 mt-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <span>© 2024 Data Analyze Panel</span>
                    <span>•</span>
                    <a href="#" className="hover:text-teal-200">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-teal-200">Terms of Service</a>
                </div>
                <div>
                    <span>Last Updated: {new Date().toLocaleDateString()}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;