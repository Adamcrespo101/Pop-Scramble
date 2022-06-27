class UsersController < ApplicationController

    def index 
        render json: User.all.order(:score).reverse, status: :ok
    end

    def create 
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def show 
        if params[:id] #if we have /:id we are getting any user 
            user = User.find(params[:id])
            render json: user
        end
        #if we dont have /:id we are authenticating a logged in user 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "user not found"}, status: 401
        end
    end

    def update 
        user = User.find_by(id: params[:id])
        if user 
            user.update!(score: params[:score], streak: params[:streak])
            render json: user, status: :accepted
        else
            render json: {error: "user not found"}, status: 404
        end
    end

    def find  
        user = User.find_by(id: params[:id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "user not found"}, status: 401
        end
    end

    private 

    def user_params
        params.permit(:username, :password, :chances, :score, :streak)
    end

end
