class UserInput{
    constructor(){
        this.txtUsername=document.createElement('input');
        this.txtUsername.type='text';
        this.txtUsername.id='txt-username';
        this.txtUsername.placeholder='Username';

        this.btnAddUser=document.createElement('input');
        this.btnAddUser.type='submit';
        this.btnAddUser.id='btn-add-user';
        this.btnAddUser.value='Add User';

        this.inputUser = document.createElement('div');
        this.inputUser.appendChild(this.txtUsername);
        this.inputUser.appendChild(this.btnAddUser);

    } 

    getNode(){
        return this.inputUser;
    }

    btnAddUserOnClick(onClick){
        this.btnAddUser.addEventListener('click',onClick);
    }
}

export {
    UserInput
}
