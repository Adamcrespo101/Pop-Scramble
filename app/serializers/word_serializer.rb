class WordSerializer < ActiveModel::Serializer
  attributes :id, :answer, :hint1, :hint2, :hint3, :initial_hint
end
