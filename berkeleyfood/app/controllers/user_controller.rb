class UserController < ApplicationController
  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user #here it goes to show.html.erb
    else
      render 'new'
    end
  end

  def user_params
    params.require(:user).permit(:first_name).permit(:last_name).permit(:email).permit(:address)
  end
end
