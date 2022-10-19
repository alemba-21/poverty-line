class UserProfilesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        user_profiles = UserProfile.all
        render json: user_profiles
    end    
    
    def create
        user_profile = UserProfile.create!(user_profile_params)
        render json:user_profile, status: :created
    end

    def show
        user_profile = UserProfile.find(params[:id])
        render json: user_profile, status: :ok
    end 

    def update
        user_profile = UserProfile.find(params[:id])
        user_profile.update!(user_profile_params)
        render json: user_profile, status: :accepted
    end 

    private
    def user_profile_params
        params.permit(:username, :firstname, :lastname, :email, :gender, :dob, :national_id, :address, :county, :estate, :user_id)
    end

    def render_not_found_response
        render json: { error: "User profile not found" }, status: :not_found
    end
end
