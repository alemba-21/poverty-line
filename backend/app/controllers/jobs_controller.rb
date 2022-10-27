class JobsController < ApplicationController
    # before_action :authorized
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        @jobs = Job.all
        render json: @jobs, status: :ok
    end

    def show
        @job = Job.find(params[:id])
        render json: @job, status: :ok
    end

    def create
        @job = Job.create!(job_params)
        render json: @job, status: :created
    end

    def destroy
        @job.destroy
        head :no_content
    end

    private
    def job_params
        params.permit(:job_title, :company_name, :job_description, :deadline, :job_type, :required_skills, :job_link, :admin_id)
    end

    def render_not_found_response
        render json: {error: "Record not found"}, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: {errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
