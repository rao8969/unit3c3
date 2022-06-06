function Voucher(name,email,address,amount){
            this.name=name;
            this.email=email;
            this.address=address;
            this.amount=amount;
}

function SubmitForm(elem){
            elem.preventDefault();

            let form=document.getElementById("form");
            let name=form.name.value;
            let email=form.email.value;
            let address=form.address.value;
            let amount=form.amount.value;

            let total=new Voucher(name,email,address,amount);
            console.log(total);

            let data=JSON.parse(localStorage.getItem("user")) || [];
            data.push(total);
            localStorage.setItem("user",JSON.stringify(data))
}

