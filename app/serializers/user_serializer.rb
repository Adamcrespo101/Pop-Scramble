class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :chances, :score

  has_one :life_time_score
end
