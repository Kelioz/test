import { makeAutoObservable, runInAction } from "mobx";
import { ArrayOfUsers, getUsers, getUsersUserId, postUsers, putUsersUserId, User } from "../../../shared/api/api";

class UserStore {
    users?: ArrayOfUsers[] = []
    user?: User 
    loading: boolean = false;  

    constructor() {
        makeAutoObservable(this);
    }

    getUserList = async () => {
        this.loading = true;
        try {
            const { data } = await getUsers();


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
            if (error instanceof Error) console.log('Ошибка при добавлении пользователя:', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    updateUser = async (id:string,name:string, email:string) => {
        this.loading = true;
        try {
            await putUsersUserId(id, {name:`${name}`, email: `${email}`});

        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при изменении пользователя:', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    
}

export default new UserStore();
