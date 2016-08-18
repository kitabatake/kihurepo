class KihusController < ApplicationController
  before_action :set_kihu, only: [:show, :edit, :update, :destroy]

  # GET /kihus
  # GET /kihus.json
  def index
    @kihus = Kihu.all
  end

  # GET /kihus/1
  # GET /kihus/1.json
  def show
  end

  # GET /kihus/new
  def new
    if session[:kihu]
      @kihu = Kihu.new session[:kihu]
    else
      @kihu = Kihu.new
    end
  end

  # POT /kihus/confirm
  def confirm
    session[:kihu] = kihu_params
    @kihu = Kihu.new(kihu_params)
    redirect_to :new if @kihu.invalid?
  end

  # GET /kihus/1/edit
  def edit
  end

  # POST /kihus
  # POST /kihus.json
  def create
    @kihu = Kihu.new(session[:kihu])

    respond_to do |format|
      if @kihu.save
        session[:kihu] = nil
        format.html { redirect_to @kihu, notice: 'Kihu was successfully created.' }
        format.json { render :show, status: :created, location: @kihu }
      else
        format.html { render :new }
        format.json { render json: @kihu.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /kihus/1
  # PATCH/PUT /kihus/1.json
  def update
    respond_to do |format|
      if @kihu.update(kihu_params)
        format.html { redirect_to @kihu, notice: 'Kihu was successfully updated.' }
        format.json { render :show, status: :ok, location: @kihu }
      else
        format.html { render :edit }
        format.json { render json: @kihu.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kihus/1
  # DELETE /kihus/1.json
  def destroy
    @kihu.destroy
    respond_to do |format|
      format.html { redirect_to kihus_url, notice: 'Kihu was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kihu
      @kihu = Kihu.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def kihu_params
      params.require(:kihu).permit(:teban, :won)
    end
end
