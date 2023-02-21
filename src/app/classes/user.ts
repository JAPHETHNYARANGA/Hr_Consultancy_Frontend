

export interface User {

    users:UserListing[];

}

export interface UserListing{
    id:number,
    user_id:string,
    email:string,
    email_verified_at:string,
    active:number,
    created_at:string,
    updated_at:string
}
