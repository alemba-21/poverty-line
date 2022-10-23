class Api::V1::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.valid?
            render json: {user: UserSerializer.new(@user)}, status: :created
        else
            render json: {error: "failed to create user"}, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:email, :password)
    end
end
