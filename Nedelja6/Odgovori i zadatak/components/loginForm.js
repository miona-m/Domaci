class LoginForm{
    constructor(){
        this.username=document.createElement('input');
        this.username.type='text';
        this.username.id='username';
        this.username.placeholder='Username';

        this.password=document.createElement('input');
        this.password.type='password';
        this.btnConfirm.id='password';
        this.btnConfirm.placeholder='Password';

        this.confirmBtn=document.createElement('button');
        this.confirmBtn.type='submit';
        this.confirmBtn.id='confirm';
        this.confirmBtn.value='CONFIRM';

        this.form=document.createElement('div');
        this.form.appendChild(this.username);
        this.form.appendChild(this.password);
        this.form.appendChild(this.confirmBtn);

        this.username.value='';

        this.username.addEventListener('change', () => {
        this.username = this.username.value;
    });
    }

    getNode(){
        return this.form;
    }   
    setBtnConfirmOnClick(onClick){
       this.btnConfirm.addEventListener('click',onClick);
    }
}

export{
    LoginForm
}