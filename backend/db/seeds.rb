puts "seeding demo user_profile"

UserProfile.create(firstname: 'Earnest', lastname: 'Achayo', email: 'earnutech@live.com', gender: 'Male', dob: 12/5/1996, national_id: 297364546, address: '555 Nairobi', county: 'Nakuru', estate: 'Buma', user_id: 2)

puts "Done seeding!"