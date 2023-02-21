export interface Register{
    success:boolean;
    message:string;
    user:{
        user_id:string;
        email: string;
        active: string;
        updated_at: string;
        created_at: string;
        id: number;
    }
}