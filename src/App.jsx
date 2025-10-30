import React, { useState } from 'react';
import { Search, Building2, ChevronLeft, ChevronRight, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';

const JobFinderApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Software Development', 'Data Science', 'Design', 'Marketing', 'Sales', 'Management', 'Finance', 'Healthcare', 'Education', 'Engineering'];
  const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Remote'];

  const jobListings = [
    { id: 1, title: 'Senior Frontend Developer', company: 'Tech Solutions Inc', location: 'Bangalore', salary: '₹12-18 LPA', experience: '3-5 years', type: 'Full Time', category: 'Software Development', description: 'Looking for a skilled Frontend Developer with expertise in React, TypeScript, and modern web technologies.', postedDate: '2 days ago', logo: '🚀', skills: ['React', 'TypeScript', 'CSS'] },
    { id: 2, title: 'Backend Developer', company: 'DataCore Systems', location: 'Mumbai', salary: '₹10-15 LPA', experience: '2-4 years', type: 'Full Time', category: 'Software Development', description: 'Seeking an experienced Backend Developer proficient in Node.js, Python, and database management.', postedDate: '1 day ago', logo: '💻', skills: ['Node.js', 'Python', 'MongoDB'] },
    { id: 3, title: 'UI/UX Designer', company: 'Creative Minds Studio', location: 'Delhi', salary: '₹8-12 LPA', experience: '2-4 years', type: 'Full Time', category: 'Design', description: 'Creative UI/UX Designer needed to craft beautiful and intuitive user experiences.', postedDate: '3 days ago', logo: '🎨', skills: ['Figma', 'Adobe XD', 'Prototyping'] },
    { id: 4, title: 'Data Analyst', company: 'Analytics Pro', location: 'Hyderabad', salary: '₹7-11 LPA', experience: '1-3 years', type: 'Full Time', category: 'Data Science', description: 'Data Analyst with strong analytical skills and experience in Python, SQL, and visualization tools.', postedDate: '4 days ago', logo: '📊', skills: ['Python', 'SQL', 'Tableau'] },
    { id: 5, title: 'Full Stack Developer', company: 'WebTech Innovations', location: 'Pune', salary: '₹15-22 LPA', experience: '4-6 years', type: 'Full Time', category: 'Software Development', description: 'Full Stack Developer with expertise in MERN stack and cloud technologies.', postedDate: '1 week ago', logo: '⚡', skills: ['React', 'Node.js', 'AWS'] },
    { id: 6, title: 'Digital Marketing Manager', company: 'Marketing Gurus', location: 'Chennai', salary: '₹10-16 LPA', experience: '3-5 years', type: 'Full Time', category: 'Marketing', description: 'Experienced Digital Marketing Manager to lead our online marketing campaigns.', postedDate: '5 days ago', logo: '📱', skills: ['SEO', 'Google Analytics', 'Content Marketing'] },
    { id: 7, title: 'DevOps Engineer', company: 'Cloud Masters', location: 'Bangalore', salary: '₹18-25 LPA', experience: '4-7 years', type: 'Full Time', category: 'Engineering', description: 'DevOps Engineer with experience in AWS, Docker, Kubernetes, and CI/CD pipelines.', postedDate: '2 days ago', logo: '☁️', skills: ['AWS', 'Docker', 'Kubernetes'] },
    { id: 8, title: 'Product Manager', company: 'StartUp Hub', location: 'Mumbai', salary: '₹20-30 LPA', experience: '5-8 years', type: 'Full Time', category: 'Management', description: 'Product Manager to drive product strategy and work with cross-functional teams.', postedDate: '3 days ago', logo: '🎯', skills: ['Product Strategy', 'Agile', 'Analytics'] },
    { id: 9, title: 'React Native Developer', company: 'AppCraft Studios', location: 'Delhi', salary: '₹11-17 LPA', experience: '2-5 years', type: 'Full Time', category: 'Software Development', description: 'Mobile App Developer skilled in React Native for iOS and Android applications.', postedDate: '1 day ago', logo: '📲', skills: ['React Native', 'JavaScript', 'Redux'] },
    { id: 10, title: 'Sales Executive', company: 'SalesForce Pro', location: 'Hyderabad', salary: '₹6-10 LPA', experience: '1-3 years', type: 'Full Time', category: 'Sales', description: 'Dynamic Sales Executive to drive revenue growth and manage client relationships.', postedDate: '6 days ago', logo: '💼', skills: ['B2B Sales', 'CRM', 'Negotiation'] },
    { id: 11, title: 'Machine Learning Engineer', company: 'AI Innovations', location: 'Bangalore', salary: '₹20-28 LPA', experience: '3-6 years', type: 'Full Time', category: 'Data Science', description: 'ML Engineer with expertise in Python, TensorFlow, and deep learning frameworks.', postedDate: '2 days ago', logo: '🤖', skills: ['Python', 'TensorFlow', 'Deep Learning'] },
    { id: 12, title: 'Graphic Designer', company: 'Design Studio Plus', location: 'Chennai', salary: '₹5-9 LPA', experience: '1-3 years', type: 'Full Time', category: 'Design', description: 'Creative Graphic Designer proficient in Adobe Creative Suite and modern design tools.', postedDate: '4 days ago', logo: '✨', skills: ['Photoshop', 'Illustrator', 'Branding'] },
    { id: 13, title: 'HR Manager', company: 'People First Consulting', location: 'Pune', salary: '₹12-18 LPA', experience: '4-7 years', type: 'Full Time', category: 'Management', description: 'HR Manager to oversee recruitment, employee relations, and organizational development.', postedDate: '5 days ago', logo: '👥', skills: ['Recruitment', 'Employee Relations', 'HR Strategy'] },
    { id: 14, title: 'Financial Analyst', company: 'FinTech Solutions', location: 'Mumbai', salary: '₹10-15 LPA', experience: '2-4 years', type: 'Full Time', category: 'Finance', description: 'Financial Analyst with strong analytical skills and experience in financial modeling.', postedDate: '3 days ago', logo: '💰', skills: ['Financial Modeling', 'Excel', 'Forecasting'] },
    { id: 15, title: 'Content Writer', company: 'Content Creators Hub', location: 'Remote', salary: '₹5-8 LPA', experience: '1-3 years', type: 'Full Time', category: 'Marketing', description: 'Creative Content Writer to produce engaging content for blogs and social media.', postedDate: '1 week ago', logo: '✍️', skills: ['SEO Writing', 'Content Strategy', 'Copywriting'] },
    { id: 16, title: 'QA Engineer', company: 'Quality First Tech', location: 'Bangalore', salary: '₹8-13 LPA', experience: '2-4 years', type: 'Full Time', category: 'Engineering', description: 'QA Engineer with experience in manual and automated testing frameworks.', postedDate: '2 days ago', logo: '🔍', skills: ['Selenium', 'Jest', 'API Testing'] },
    { id: 17, title: 'Cybersecurity Specialist', company: 'SecureNet Systems', location: 'Hyderabad', salary: '₹15-22 LPA', experience: '3-6 years', type: 'Full Time', category: 'Engineering', description: 'Cybersecurity Specialist to protect our systems and networks from threats.', postedDate: '4 days ago', logo: '🔒', skills: ['Network Security', 'Penetration Testing', 'SIEM'] },
    { id: 18, title: 'Business Analyst', company: 'Enterprise Solutions', location: 'Delhi', salary: '₹11-16 LPA', experience: '3-5 years', type: 'Full Time', category: 'Management', description: 'Business Analyst to bridge the gap between IT and business objectives.', postedDate: '5 days ago', logo: '📈', skills: ['Business Analysis', 'SQL', 'Process Improvement'] },
    { id: 19, title: 'Video Editor', company: 'Media Production House', location: 'Mumbai', salary: '₹6-11 LPA', experience: '2-4 years', type: 'Full Time', category: 'Design', description: 'Video Editor skilled in Adobe Premiere, After Effects, and creative storytelling.', postedDate: '6 days ago', logo: '🎬', skills: ['Premiere Pro', 'After Effects', 'Color Grading'] },
    { id: 20, title: 'Cloud Architect', company: 'CloudTech Enterprises', location: 'Bangalore', salary: '₹25-35 LPA', experience: '6-10 years', type: 'Full Time', category: 'Engineering', description: 'Senior Cloud Architect with expertise in AWS, Azure, and cloud infrastructure.', postedDate: '1 day ago', logo: '🌐', skills: ['AWS', 'Azure', 'Cloud Architecture'] },
    { id: 21, title: 'iOS Developer', company: 'Mobile First Apps', location: 'Chennai', salary: '₹12-18 LPA', experience: '3-5 years', type: 'Full Time', category: 'Software Development', description: 'iOS Developer with strong Swift and SwiftUI skills to build native applications.', postedDate: '3 days ago', logo: '📱', skills: ['Swift', 'SwiftUI', 'iOS SDK'] },
    { id: 22, title: 'Data Scientist', company: 'Big Data Corp', location: 'Pune', salary: '₹18-26 LPA', experience: '4-6 years', type: 'Full Time', category: 'Data Science', description: 'Data Scientist to build predictive models and extract insights from large datasets.', postedDate: '2 days ago', logo: '🔬', skills: ['Python', 'Machine Learning', 'Statistics'] },
    { id: 23, title: 'Social Media Manager', company: 'Digital Buzz Agency', location: 'Remote', salary: '₹7-12 LPA', experience: '2-4 years', type: 'Full Time', category: 'Marketing', description: 'Social Media Manager to create engaging content and manage brand presence.', postedDate: '4 days ago', logo: '📢', skills: ['Social Media', 'Content Creation', 'Analytics'] },
    { id: 24, title: 'Java Developer', company: 'Enterprise Tech Solutions', location: 'Kolkata', salary: '₹9-14 LPA', experience: '2-5 years', type: 'Full Time', category: 'Software Development', description: 'Java Developer with experience in Spring Boot and Microservices architecture.', postedDate: '5 days ago', logo: '☕', skills: ['Java', 'Spring Boot', 'Microservices'] },
    { id: 25, title: 'Blockchain Developer', company: 'Crypto Innovations', location: 'Ahmedabad', salary: '₹16-24 LPA', experience: '3-6 years', type: 'Full Time', category: 'Software Development', description: 'Blockchain Developer with expertise in Ethereum, Solidity, and smart contracts.', postedDate: '1 day ago', logo: '⛓️', skills: ['Solidity', 'Ethereum', 'Smart Contracts'] }
  ];

  const JobCard = ({ job }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-3xl">{job.logo}</div>
          <div>
            <h3 className="font-bold text-lg text-gray-800 hover:text-purple-600 cursor-pointer">{job.title}</h3>
            <p className="text-gray-600 text-sm">{job.company}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{job.postedDate}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
        <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.experience}</span>
        <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{skill}</span>))}
      </div>
      <div className="flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium transition-all">Apply Now</button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">💾</button>
      </div>
    </div>
  );

  const getFilteredJobs = () => {
    return jobListings.filter(job => {
      const categoryMatch = !selectedCategory || job.category === selectedCategory;
      const locationMatch = !selectedLocation || job.location === selectedLocation;
      const searchMatch = !searchQuery || job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.company.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()) || job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      return categoryMatch && locationMatch && searchMatch;
    });
  };

  const NavBar = () => (
    <nav className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>
          <span className="text-purple-600">Job</span><span className="text-orange-500"> Finder</span>
        </div>
        <div className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-purple-600 font-semibold' : 'text-gray-700'} hover:text-purple-600`}>Home</button>
          <button onClick={() => setCurrentPage('browse')} className={`${currentPage === 'browse' ? 'text-purple-600 font-semibold' : 'text-gray-700'} hover:text-purple-600`}>Browse</button>
          <button onClick={() => setCurrentPage('jobs')} className={`${currentPage === 'jobs' ? 'text-purple-600 font-semibold' : 'text-gray-700'} hover:text-purple-600`}>Jobs</button>
          <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'text-purple-600 font-semibold' : 'text-gray-700'} hover:text-purple-600`}>About</button>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentPage('login')} className="text-gray-700 hover:text-purple-600">Login</button>
          <button onClick={() => setCurrentPage('register')} className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Register</button>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 px-6 py-2 rounded-full mb-6 border border-red-100">
            <Building2 className="w-5 h-5 text-red-500" />
            <span className="text-red-500 font-medium">India's No 1 job Portal Website</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 leading-tight">Search Apply &<br />Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Dream Job</span></h1>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.</p>
          <div className="flex max-w-3xl mx-auto shadow-lg rounded-lg">
            <input type="text" placeholder="Search jobs by title, company, or skills..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 px-6 py-4 rounded-l-lg border-2 border-gray-200 focus:outline-none focus:border-purple-600" />
            <button onClick={() => setCurrentPage('browse')} className="bg-black text-white px-8 py-4 rounded-r-lg hover:bg-gray-800"><Search className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">Categories</h2>
          <p className="text-gray-600 text-lg">Explore our extensive job market.</p>
        </div>
        <div className="flex items-center justify-center gap-4 mb-16">
          <button className="p-2 hover:bg-gray-200 rounded-full"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={() => { setSelectedCategory('Software Development'); setCurrentPage('browse'); }} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600">Frontend Developer</button>
          <button onClick={() => { setSelectedCategory('Software Development'); setCurrentPage('browse'); }} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600">Backend Developer</button>
          <button className="p-2 hover:bg-gray-200 rounded-full"><ChevronRight className="w-6 h-6" /></button>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-4xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Latest & Top</span> Job Openings</h2>
            <button onClick={() => setCurrentPage('browse')} className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">View All <ChevronRight className="w-5 h-5" /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobListings.slice(0, 20).map(job => (<JobCard key={job.id} job={job} />))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setCurrentPage('browse')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium text-lg shadow-lg hover:shadow-xl">Explore All 25 Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );

  const BrowsePage = () => {
    const filteredJobs = getFilteredJobs();
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex gap-8">
            <div className="w-72 bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Filter Jobs</h2>
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-lg text-gray-700 flex items-center gap-2"><Briefcase className="w-5 h-5" />Category</h3>
                <label className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="radio" name="category" value="" checked={selectedCategory === ''} onChange={(e) => setSelectedCategory(e.target.value)} className="w-4 h-4" />
                  <span className="text-gray-700 font-medium">All Categories</span>
                </label>
                {categories.map((cat, idx) => (
                  <label key={idx} className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="radio" name="category" value={cat} checked={selectedCategory === cat} onChange={(e) => setSelectedCategory(e.target.value)} className="w-4 h-4" />
                    <span className="text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 text-lg text-gray-700 flex items-center gap-2"><MapPin className="w-5 h-5" />Location</h3>
                <label className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                  <input type="radio" name="location" value="" checked={selectedLocation === ''} onChange={(e) => setSelectedLocation(e.target.value)} className="w-4 h-4" />
                  <span className="text-gray-700 font-medium">All Locations</span>
                </label>
                {locations.map((loc, idx) => (
                  <label key={idx} className="flex items-center gap-3 mb-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input type="radio" name="location" value={loc} checked={selectedLocation === loc} onChange={(e) => setSelectedLocation(e.target.value)} className="w-4 h-4" />
                    <span className="text-gray-700">{loc}</span>
                  </label>
                ))}
              </div>
              {(selectedCategory || selectedLocation) && (
                <button onClick={() => { setSelectedCategory(''); setSelectedLocation(''); }} className="w-full mt-6 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200">Clear Filters</button>
              )}
            </div>
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">{filteredJobs.length} Jobs Found
                  {(selectedCategory || selectedLocation) && (
                    <span className="text-base font-normal text-gray-600 ml-2">
                      {selectedCategory && `in ${selectedCategory}`}{selectedCategory && selectedLocation && ', '}{selectedLocation && `at ${selectedLocation}`}
                    </span>
                  )}
                </h2>
                <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-purple-600 w-64" />
              </div>
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredJobs.map(job => (<JobCard key={job.id} job={job} />))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-20 bg-white rounded-lg">
                  <p className="text-2xl font-semibold mb-2">No jobs found</p>
                  <button onClick={() => { setSelectedCategory(''); setSelectedLocation(''); setSearchQuery(''); }} className="mt-4 text-purple-600 hover:text-purple-700 font-medium">Clear all filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LoginPage = () => {
    const [loginForm, setLoginForm] = useState({ email: '', password: '', userType: 'student' });
    
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">Login</h1>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" placeholder="johndoe@gmail.com" value={loginForm.email} onChange={(e) => setLoginForm({...loginForm, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input type="password" placeholder="********" value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex gap-6 mb-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="userType" value="student" checked={loginForm.userType === 'student'} onChange={(e) => setLoginForm({...loginForm, userType: e.target.value})} className="w-4 h-4" />
                <span>Student</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="userType" value="recruiter" checked={loginForm.userType === 'recruiter'} onChange={(e) => setLoginForm({...loginForm, userType: e.target.value})} className="w-4 h-4" />
                <span>Recruiter</span>
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 mb-4">Login</button>
            <div className="text-center mb-4">
              <p className="text-gray-600">Create new Account</p>
            </div>
            <button onClick={() => setCurrentPage('register')} className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700">Register</button>
          </div>
        </div>
      </div>
    );
  };

  const RegisterPage = () => {
    const [registerForm, setRegisterForm] = useState({
      fullname: '',
      email: '',
      password: '',
      pan: '',
      aadhar: '',
      phone: '',
      userType: 'student',
      profile: null
    });
    
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-md mx-auto px-6 py-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">Register</h1>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Fullname</label>
              <input type="text" placeholder="John Doe" value={registerForm.fullname} onChange={(e) => setRegisterForm({...registerForm, fullname: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" placeholder="johndoe@gmail.com" value={registerForm.email} onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input type="password" placeholder="********" value={registerForm.password} onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">PAN Card Number</label>
              <input type="text" placeholder="ABCDEF1234G" value={registerForm.pan} onChange={(e) => setRegisterForm({...registerForm, pan: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Adhar Card Number</label>
              <input type="text" placeholder="123456789012" value={registerForm.aadhar} onChange={(e) => setRegisterForm({...registerForm, aadhar: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input type="tel" placeholder="+1234567890" value={registerForm.phone} onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex gap-6 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="registerUserType" value="student" checked={registerForm.userType === 'student'} onChange={(e) => setRegisterForm({...registerForm, userType: e.target.value})} className="w-4 h-4" />
                <span>Student</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="registerUserType" value="recruiter" checked={registerForm.userType === 'recruiter'} onChange={(e) => setRegisterForm({...registerForm, userType: e.target.value})} className="w-4 h-4" />
                <span>Recruiter</span>
              </label>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Profile Photo</label>
              <input type="file" accept="image/*" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800">Register</button>
          </div>
        </div>
      </div>
    );
  };

  const Creator = () => {
  return (
    <div>
      {/* Simple Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">Creator</h1>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
        <div className="flex justify-center">
          <div className="h-80 w-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-md flex items-center justify-center overflow-hidden">
            <img
              src="./assets/istekhar.jpg" 
              alt="Md Istekhar Alam"
              
            />
          </div>
        </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Md Istekhar Alam</h2>
            <p className="text-gray-600 mb-4">
              I'm Md Istekhar Alam, an aspiring Full Stack Web Developer and Tech Enthusiast passionate about building innovative and efficient digital solutions. I have hands-on experience developing front-end and back-end web applications using technologies such as React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mb-4">
              During my CodeClause internship, I developed interactive projects including an Online Quiz App and a GitHub Explorer, focusing on user-friendly interfaces, dynamic content handling, and performance optimization. Later, at Afford Medical Technologies, I designed a React-based URL shortener web app with URL tracking, expiry, and statistics visualization features.
            </p>
            <p className="text-gray-600 mb-4">
              I also have strong experience in data visualization and business analytics, having created a Retailer Dashboard in Power BI during my VOIS internship, leveraging DAX and Excel to drive insights from complex data.
            </p>
            <p className="text-gray-600 mb-4">
              Beyond web development, my interests extend to IoT, smart systems, and fire safety engineering. I have previously designed a Smart Building network in Cisco Packet Tracer, integrating IoT devices and ensuring secure communication between network components.
            </p>
            <p className="text-gray-600">
              My curiosity for technology is fueled by creativity and a desire to solve real-world problems through innovative digital solutions. Outside of tech, I enjoy cricket and cycling, which keep me active and balanced.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



  return (
    <div>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'browse' && <BrowsePage />}
      {currentPage === 'jobs' && <BrowsePage />}
      {currentPage === 'about' && <Creator />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'register' && <RegisterPage />}
    </div>
  );
};

export default JobFinderApp;