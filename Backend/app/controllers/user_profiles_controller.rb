class UserProfilesController < ApplicationController
    before_action :authorize_request
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        @user_profiles = UserProfile.all
        render json: @user_profiles
    end    
    
    def create
        @user_profile = UserProfile.create!(user_profile_params)
        render json:@user_profile, status: :created
    end

    def show
        @user_profile = UserProfile.find(params[:id])
        render json: @user_profile, status: :ok
    end 

    def update
        @user_profile = UserProfile.find(params[:id])
        @user_profile.update!(user_profile_params)
        render json: @user_profile, status: :accepted
    end 

    def destroy
        @user_profile.destroy
        head :no_content
    end

    private
    def user_profile_params
        params.permit(:firstname, :middlename, :lastname, :email, :gender, :age, :national_id, :address, :phone, :county, :estate, :career_summary, :experience_date, :experience, :education_date, :education, :skills_and_hobbies, :languages, :user_id)
    end

    def render_not_found_response
        render json: { error: "User profile not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
