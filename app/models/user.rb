class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :jwt_authenticatable,
          :registerable, jwt_revocation_strategy: JwtBlacklist

  has_many :jobs, dependent: :destroy
end
