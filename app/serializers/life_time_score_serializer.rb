class LifeTimeScoreSerializer < ActiveModel::Serializer
  attributes :id, :score, :user_id

  belongs_to :user

end
