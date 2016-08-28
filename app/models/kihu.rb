class Kihu < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  has_many :moves, :dependent => :destroy
  belongs_to :teban

  attr_accessor :kihu_text

  def self.parse (text)
    parsed = KihuParser.new.parse text
    result = {
      match_date: parsed[:date],
      rule: parsed[:rule],
      handicap: parsed[:handicap],
      sente: parsed[:sente],
      gote: parsed[:gote]
    }

    moves = []
    moves_num = 1
    parsed[:moves].each do |move|
      m = {
        num: moves_num,
        koma: move[:koma],
        to_x: move[:to][:x],
        to_y: move[:to][:y],
        naru: move[:naru],
        utsu: move[:utsu],
        time: move[:time]
      }
      unless m[:utsu]
        m[:from_x] = move[:from][:x]
        m[:from_y] = move[:from][:y]
      end
      moves << m
      moves_num += 1
    end

    result[:moves] = moves
    result
  end

  def self.build_with_params (params)
    moves = params[:moves]
    kihu = Kihu.new params.except :moves
    moves.each do |move|
      kihu.moves.build move
    end
    kihu
  end

end
