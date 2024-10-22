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
    layoutMargin:'mx-[6.375rem]',
    layoutPadding:'px-[6.375rem]',
}

// values are in rems
export const uiValues = {
    layoutMargin: '6.375rem'
}

export const categories = [
    {'_id':faker.database.mongodbObjectId(), title:'Business'},
    {'_id':faker.database.mongodbObjectId(), title:'Science'},
    {'_id':faker.database.mongodbObjectId(), title:'Litrature & English'},
    {'_id':faker.database.mongodbObjectId(), title:'Mathematics'},
    {'_id':faker.database.mongodbObjectId(), title:'General Book'},
    {'_id':faker.database.mongodbObjectId(), title:'Law'},
    {'_id':faker.database.mongodbObjectId(), title:'Children'},
    {'_id':faker.database.mongodbObjectId(), title:'Guide'},
    {'_id':faker.database.mongodbObjectId(), title:'Things you like'},
]