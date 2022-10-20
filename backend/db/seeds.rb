puts "seeding demo user_profile"

UserProfile.create(firstname: 'Earnest', lastname: 'Achayo', email: 'earnytech@live.com', gender: 'Male', dob: 12/5/1996, national_id: 297364546, address: '555 Nairobi', county: 'Nakuru', estate: 'Buma', user_id: 2)
UserProfile.create(firstname: 'Jacky', lastname: 'Chan', email: 'chanbaby@live.com', gender: 'Female', dob: 22/5/1991, national_id: 307364546, address: '222-444 Nairobi', county: 'Mombasa', estate: 'Diani', user_id: 1)

puts "Done seeding user Profile!"

puts "seeding demo jobs"

Job.create(job_title: "Software Endineer", job_description: "Software enginners with good knowledge on proramming. Must be ready to adapt to tech changes", required_skills: "Javascript, react, AWS, Rails, Kotlin and other a bit of knowledge in android system development", job_link: "wwww.jmoko.com")
Job.create(job_title: "Network Administrator", job_description: "Good interpesonal and communication skills, good at networking in SISCO Must be ready to adapt to tech changes", required_skills: "Networking SISCO", job_link: "wwww.jmoko.com")

puts "Done seeding user Profile!"