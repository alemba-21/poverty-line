class JobApplicationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        @job_applications = JobApplication.all
        render json: @job_applications, status: :ok
    end

    def show
        @job_application = JobApplication.find(params[:id])
        render json: @job_application, status: :ok
    end

    def create
        @job_application = JobApplication.create!(job_application_params)
        render json: @job_application, status: :created
    end

    def destroy
        @job_application.destroy
        head :no_content
    end

    private
    def job_application_params
        params.permit(:cover_letter, :attachment)
    end

    def render_not_found_response
        render json: {error: "Record not found"}, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: {errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
