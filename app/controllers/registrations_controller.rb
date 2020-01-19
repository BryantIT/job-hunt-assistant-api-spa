class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    begin
      super
    rescue ActiveRecord::RecordInvalid => e
      render_resource(e.record)
    rescue ActiveRecord::RecordNotUnique => e
      err = OpenStruct.new(errors: {user: 'Already Exists'})
      validation_error(err)
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password)
  end
end
