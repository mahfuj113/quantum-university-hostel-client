
const Footer = () => {
    return (
        <footer className="footer p-10 mt-14 bg-black">
            <div className='text-white'>
                <img src="https://i.ibb.co/w7DQZbc/images-2.png" alt="" />
                <p className="text-2xl font-bold">Job Portal</p>
            </div>
            <div className='text-white'>
                <header className="footer-title opacity-100">Links</header>
                {/* <Link className='hover:underline' to='/allJobs'>All Jobs</Link> */}
                {/* <Link className='hover:underline' to='/blogs'>Blogs</Link> */}
            </div>
            <div className='text-white'>
                <header className="footer-title opacity-100">Social Links</header>
                <div className='flex md:flex-col gap-3'>
                    {/* <a href='https://www.facebook.com/profile.php?id=100009437794344' className="link link-hover text-2xl"><FaFacebookF></FaFacebookF></a>
                    <a href='https://www.github.com/mahfuj113' className="link link-hover text-2xl"><FaGithub></FaGithub></a>
                    <a href='https://twitter.com/MdMahfujhasan7' className="link link-hover text-2xl"><FaTwitter></FaTwitter></a> */}
                </div>
            </div>
            <div className='text-white'>
                <header className="footer-title opacity-100">Newsletter</header>
                <div className="lg:w-80  ">
                    <label className="label">
                        <span className="label-text text-white">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;