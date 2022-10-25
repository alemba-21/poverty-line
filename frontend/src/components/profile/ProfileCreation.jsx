import React, { useState } from "react";

const ProfileCreation = () => {
  const [user_profile, setUserProfile] = useState(null)
  const [firstname, setFistName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState([]);
  const [idnum, setIdNum] = useState([]);
  const [postalAddress, setPostalAddress] = useState("");
  const [county, setCounty] = useState("");
  const [estate, setEstate] = useState("");
  const [careerSummary, setCareerSummary] = useState("");
  const [experienceDate, setExperienceDate] = useState([]);
  const [experience, setExperience] = useState("");
  const [educationDate, setEducationDate] = useState([]);
  const [education, setEducation] = useState("");
  const [hobbieSkills, setHobbieSkills] = useState(""); 


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e)

  

    fetch("http:/127.0.0.1:5000//user_profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        middlename,
        lastname,
        email,
        gender,
        age,
        idnum,
        postalAddress,
        county,
        estate,
        careerSummary,
        experienceDate,
        experience,
        educationDate,
        education,
        hobbieSkills,

      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user_profile) => console.log(user_profile));
      }
    });

  }

  return (
    <div className='bg-white mb-4'>
      <h1 className='text-4xl font-bold text-center my-10'>Profile</h1>
      <div className='bg-green-50 h-screen max-w-[1000px] overflow-auto rounded-3xl mx-auto'>

      <form onSubmit={handleSubmit} className='w-full max-w-lg m-auto pt-8'>
      <div className="flex flex-row -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="firstname" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="John"
                value={ firstname }
                onChange={ (e) => setFistName(e.target.value) }
              />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label htmlFor="middlename" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Midle Name
          </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" 
                type="text"
                placeholder="Doe"
                value={ middlename }
                onChange={ (e) => setMiddleName(e.target.value) }
              />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label htmlFor="lastname" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" 
                type="text"
                placeholder="Morar"
                value={ lastname }
                onChange={ (e) => setLastName(e.target.value) }
              />
        </div>
      </div>
     
      <div className="flex flex-row -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Email
          </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
              />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Gender
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Male</option>
              <option>Female</option>
              <option>I prefer not to say</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Age
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                placeholder="Your age"
                value={ age }
                onChange={ (e) => setAge(e.target.value) }
              />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            ID
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="ID No"
                value={ idnum }
                onChange={ (e) => setIdNum(e.target.value) }
              />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label htmlFor="postalAdderess" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Postal Address
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                value={ postalAddress }
                onChange={ (e) => setPostalAddress(e.target.value) }
              />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            County
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Nairobi</option>
              <option>Mombasa</option>
              <option>Kisumu</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-8 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Estate
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                value={ estate }
                onChange={ (e) => setEstate(e.target.value) }
              />
        </div>
      </div>

      <div className="flex flex-row -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Career Summary
          </label>
              <textarea className="block p-2.5 w-full text-sm text-gray-900 h-36 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="grid-password"
                type="text"
                value={ careerSummary }
                onChange={ (e) => setCareerSummary(e.target.value) }
              />
        </div>
      </div>

      <div className="flex flex-row -mx-3 mb-6">
        <div className='flex-1/4'>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Date
        </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="date"
                value={ experienceDate }
                onChange={ (e) => setExperienceDate(e.target.value) }
              />
        </div>
        <div className="w-full flex-3/4 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Experience
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={ experience }
                onChange={ (e) => setExperience(e.target.value) }
              />
        </div>
      </div>
      
      <div className="flex flex-row -mx-3 mb-6">
        <div className='flex-1/4'>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Date
        </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="date"
                value={ educationDate }
                onChange={ (e) => setEducationDate(e.target.value) }
              />
        </div>
        <div className="w-full flex-3/4 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Education
          </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={ education }
                onChange={ (e) => setEducation(e.target.value) }
              />
        </div>
      </div>

      <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Hobbies & Skills
          </label>
            <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="grid-password"
              type="text"
              value={ hobbieSkills }
              onChange={ (e) => setHobbieSkills(e.target.value) }
            />
          </div>


      <button type="submit" className='bg-green-600 w-[200px] rounded-full font-medium my-6 ml-32  py-3 text-black'>SAVE</button>
    </form>

    </div>
    </div>


  )
}

export default ProfileCreation