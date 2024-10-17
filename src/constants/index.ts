import { faker } from "@faker-js/faker"
export const navItems = [
    {
        text:'Home',
        link:'/'
    },
    {
        text:'My Library',
        link:'/library'
    },
    {
        text:'Subscription',
        link:'/subscription'
    }
]


export const icons = {
   iconWithText:'logo-with-text' 
}

export const ui = {
    layoutMargin:'mx-[7.5rem]',
    layoutPadding:'px-[7.5rem]'
}

export const categories = [
    {'_id':faker.database.mongodbObjectId(), name:'Business'},
    {'_id':faker.database.mongodbObjectId(), name:'Science'},
    {'_id':faker.database.mongodbObjectId(), name:'Litrature & English'},
    {'_id':faker.database.mongodbObjectId(), name:'Mathematics'},
    {'_id':faker.database.mongodbObjectId(), name:'General Book'},
    {'_id':faker.database.mongodbObjectId(), name:'Law'},
    {'_id':faker.database.mongodbObjectId(), name:'Children'},
    {'_id':faker.database.mongodbObjectId(), name:'Guide'},
    {'_id':faker.database.mongodbObjectId(), name:'Things you like'},
]