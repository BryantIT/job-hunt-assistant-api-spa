class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :jwt_authenticatable,
          :registerable, jwt_revocation_strategy: JwtBlacklist

  has_many :jobs, dependent: :destroy

  validates:name, presence: true
  validates:email, presence: true
  validates:password, presence: true
end
