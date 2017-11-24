/*export class AllRestaurants {
    Restaurants: Array<Restaurant>;
}*/

export class Restaurant {
    Name: string;
    Location: string;
    Description: string;
    Note: string;
    Body: Array<Body>;
}

class Body {
    Date: Date;
    MenuList: Array<MenuList>;
}

class MenuList {
    Menu: string;
    Price: number;
}