import { makeAutoObservable, runInAction } from "mobx";
import { getUsers, getUsersUserId, postUsers, putUsersUserId, User } from "../../../shared/api/api";

class UserStore {
    users?: User[] = []
    user?: User 
    loading: boolean = false;  

    constructor() {
        makeAutoObservable(this);
    }

    getUserList = async (skip?:number, take?:number) => {
        this.loading = true;
        try {
            const { data } = await getUsers({skip:skip, take:take});


            runInAction(() => {
                this.users = data?.results || [];
            });
        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при получении списка пользователей:', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;

            });
        }
    };

    getUserById = async (id: string) => {
        this.loading = true;
        try {
            const { data } = await getUsersUserId(id);

            runInAction(() => {
                this.user = data || null;
            });
        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при получении пользователя:', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    addUser = async (name:string, email:string) => {
        this.loading = true;
        try {
            await postUsers({name:`${name}`, email: `${email}`});

        } catch (error) {
            if (error instanceof Error) {
                console.log('Ошибка при добавлении пользователя:', error.message)
                alert(error.message)
                }

        } finally {
            runInAction(() => {
                this.loading = false;
                console.log('всё ок')
            });
        }
    };

    updateUser = async (id:string,name:string, email:string) => {
        this.loading = true;
        try {
            await putUsersUserId(id, {name:`${name}`, email: `${email}`});

        } catch (error) {
            if (error instanceof Error) {
                alert("Ошибка, возможно вы ввели не верный email используйте коректный email например(test@gmail.com)")
                console.log('Ошибка при изменении пользователя:', error.message)
                
            }
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    
}

export default new UserStore();
