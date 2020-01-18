class JobsController < ApplicationController
  before_action :authenticate_user!

  def index
    jobs = current_user.jobs

    render json: jobs, status: 200
  end

  def new
    job = Job.new
  end

  def create
    job = Job.new(job_params)
    job.user = current_user
    job.save
    render_resource(job)

end

  def show
    job = Job.find(params[:id])
    authorize_user_resource(job)

    render_resource(job)
  end

  def edit
    job = Job.find_by_id(params[:id])
  end

  def update
    job = Job.find(params[:id])
    authorize_user_resource(job)
    job.update(job_params)
    render_resource(job)

  end

  def destroy
    job = Job.find(params[:id])
    authorize_user_resource(job)
    job.destroy
    render_resource(job)

    # render json: {jobId :job.id, message: "Has been deleted!"}
  end

  private
  def job_params
    params.require(:job).permit(:company_name, :contact_name, :email, :fax,
      :phone1, :phone2, :has_applied, :application_date, :website, :application_link,
      :has_phone_interview, :phone_interview_date, :phone_interview_notes, :has_in_person,
      :in_person_interview, :in_person_notes, :company_notes, :salary, address:{})
  end
end
