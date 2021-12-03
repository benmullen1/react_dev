class Expense{

    id;
    title;
    amount;
    date;

    constructor(title, amount, date){
        this.title = (!title) ? "": title;
        this.amount = (!amount) ? "": amount;
        this.date = (!date) ? new Date(): date;
        this.id = "-1";
    }

    toString(){
        let dateString = "";
        if (typeof(this.date) === Date){
            dateString = this.date.toLocaleString()
        }
        else {
            dateString = this.date;
        }
        return this.id + " " + this.title + " " + this.amount + " " + dateString;
    }

}
export default Expense;