export interface Login{
    success:boolean;
    token:string;
    user:{
        user_id:string;
        email: string;
        email_verified_at:string;
        active: string;
        updated_at: string;
        created_at: string;
        id: number;
    }
}