class Blog {
    constructor (newTitle, newDescription, postedOnDate){
        this.title = newTitle;
        this.newDescription = newDescription;
        this.postedOnDate = postedOnDate;
        this.editedOnDate = null;
    }

    setTitle(newTitle){
        this.title = newTitle;
    }

    setDescriprion(newDescription){
        this.description = newDescription;
    }

    setEditedOnDate(editedOnDate){
        this.editedOnDate = editedOnDate;
    }
}
