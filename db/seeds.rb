# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

charaf = User.create(username: 'charaf', email: 'charaf@gmail.com', password: 'charaf123')

david = User.create(username: 'david', email: 'david@gmail.com', password: '123david')

Quiz.create([
    {name: 'The Coldest Sunset', user_id: charaf},
    {name: 'Ruby land', user_id: david},
    {name: 'Rails', user_id: david}
])
