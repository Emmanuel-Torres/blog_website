module.exports = class Blog {
    constructor (newTitle, newDescription, postedOnDate){
        this.title = newTitle;
        this.description = newDescription;
        this.postedOnDate = postedOnDate;
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDescriprion(newDescription){
        this.description = newDescription;
    }
}
