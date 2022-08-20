const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen font-Lato'>
			 <div>{/*Navbar*/}</div> 
			<main className='flex-grow'>{children}</main>
			<div>{/*Footer*/}</div>
		</div>
	);
};

export default Layout;
