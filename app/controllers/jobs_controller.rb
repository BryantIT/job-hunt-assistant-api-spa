class JobsController < ApplicationController
  before_action :authenticate_user!

  def index
    @jobs = current_user.jobs

    render json: @jobs, status: 200
  end

  def new
    @job = Job.new
  end

  def create
    @job = current_user.jobs.build(job_params)

    if @job.save
      render json: @jobs, status: 200
    else
      render json: {status: "error", code: 3000, message: "Your Job Application did not save!"}
  end
end

  def show
    @job = Job.find(params[:id])
    authorize_user_resource(jobs)

    render json: @job, status: 200
  end

  def edit
    @job = Job.find_by_id(params[:id])
  end

  def update
    @job = Job.find_by_id(params[:id])
    @job.update(job_params)

    render json: @jobs, status: 200
  end

  def destroy
    @job = Job.find_by_id(params[:id])
    @job.destroy

    # render json: {jobId :@job.id, message: "Has been deleted!"}
  end

  private
  def job_params
    params.require(:job).permit(:company_name, :contact_name, :email, :fax,
      :phone1, :phone2, :has_applied, :application_date, :website, :application_link,
      :has_phone_interview, :phone_interview_date, :phone_interview_notes, :has_in_person,
      :in_person_interview, :in_person_notes, :company_notes, :salary, :user_id, address:{})
  end
end
