import Card from "./components/Card"

const App = () => {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    posted: "5 Days ago",
    role: "Senior UI/UX Designer",
    type: "Part time",
    level: "Senior level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
    posted: "2 Days ago",
    role: "Frontend Developer",
    type: "Full time",
    level: "Mid level",
    salary: "$140/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
    posted: "1 Week ago",
    role: "React Developer",
    type: "Remote",
    level: "Junior level",
    salary: "$90/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
    posted: "3 Days ago",
    role: "Backend Engineer",
    type: "Full time",
    level: "Senior level",
    salary: "$160/hr",
    location: "Pune, India",
  },
  {
    id: 5,
    company: "Apple",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    posted: "6 Days ago",
    role: "iOS Developer",
    type: "Part time",
    level: "Mid level",
    salary: "$130/hr",
    location: "Delhi, India",
  },
  {
    id: 6,
    company: "Meta",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
    posted: "4 Days ago",
    role: "Full Stack Developer",
    type: "Remote",
    level: "Senior level",
    salary: "$170/hr",
    location: "Chennai, India",
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Spotify-logo.png",
    posted: "2 Weeks ago",
    role: "Product Designer",
    type: "Internship",
    level: "Entry level",
    salary: "$70/hr",
    location: "Kolkata, India",
  },
  {
    id: 8,
    company: "Adobe",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    posted: "1 Day ago",
    role: "UI Designer",
    type: "Full time",
    level: "Mid level",
    salary: "$110/hr",
    location: "Noida, India",
  },
  {
    id: 9,
    company: "Tesla",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Tesla-logo.png",
    posted: "5 Hours ago",
    role: "Software Engineer",
    type: "Remote",
    level: "Senior level",
    salary: "$180/hr",
    location: "Ahmedabad, India",
  },
  {
    id: 10,
    company: "Infosys",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Infosys-logo.png",
    posted: "3 Weeks ago",
    role: "Java Developer",
    type: "Full time",
    level: "Fresher",
    salary: "$60/hr",
    location: "Mysore, India",
  },
];
  return (
    <div className='parent'>
      {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.company} role={elem.role} logo={elem.logo} posted={elem.posted} type={elem.type} level={elem.level} sal={elem.salary} loc={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
