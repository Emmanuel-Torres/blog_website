module.exports = class Blog {
    constructor (newTitle, newDescription, newCategory, postedOnDate){
        this.title = newTitle;
        this.description = newDescription;
        this.category = newCategory;
        this.postedOnDate = postedOnDate;
    }
}
