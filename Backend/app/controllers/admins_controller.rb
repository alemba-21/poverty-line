class AdminsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        admins = Admin.all
        render json: admins
    end

    def show
        @user = Admin.find(params[:id])
        render json: @user
    end

    private  
    
    def render_not_found_response
        render json: { error: "Admin not found" }, status: :not_found
    end
end
