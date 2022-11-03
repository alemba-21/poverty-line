class JobApplicationSerializer < ActiveModel::Serializer
  attributes :id, :cover_letter, :attachment

  # belongs_to :user_profile
end
