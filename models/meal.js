class Meal {
    constructor(
        Id, 
        categoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree, 
        isVegan, 
        isVegetarian, 
        isLactoseFree
        ){
            this.id=Id;
            this.categoryIds=categoryIds;
            this.title=title;
            this.affordability=affordability;
            this.complexity=complexity;
            this.imageUrl=imageUrl;
            this.duration=duration; 
            this.ingredients=ingredients;
            this.steps=steps;
            this.isGlutenFree=isGlutenFree;
            this.isVegan=isVegan;
            this.isVegetarian=isVegetarian;
            this.isGlutenFree=isLactoseFree;
        }
}

export default Meal;